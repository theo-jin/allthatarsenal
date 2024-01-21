'use client'
import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { useState, useEffect } from "react";
import { EditIcon } from "@/components/icons";
import { DeleteIcon } from "@/components/icons";
import CommentModal from "./CommentModal";
import { ObjectId } from "mongodb";

interface CommentItem {
    comment: string;
    _id: ObjectId;
    author: string;
    parent: ObjectId;
}

interface CommentProps {
    result: {
        _id: ObjectId;
    };
}

export default function Comment({ player }: any) {

    let [data, setData] = useState<CommentItem[]>([]);

    useEffect(() => {
        fetch('/api/comment/list?id=' + player._id).then(r => r.json()).then((result) => {
            setData(result)
        })
    }, [player._id]);

    const handleDelete = (i: number) => {
        console.log(data[i]._id)
        fetch('/api/comment/delete', {
            method: 'DELETE',
            body: JSON.stringify(data[i]._id),
        })
    };
    return (
        <div className="flex justify-center">
            <Table aria-label=" Example static collection table" className="flex w-full md:w-1/2 justify-center" >
                <TableHeader>
                    <TableColumn style={{ width: "80%" }}>Comments</TableColumn>
                    <TableColumn style={{ width: "10%" }} >AUTHOR</TableColumn>
                    <TableColumn style={{ width: "10%" }} >EDIT & DELETE</TableColumn>
                </TableHeader>

                {data.length > 0 ? (
                    <TableBody>
                        {data.map(function (a, i) {
                            return (
                                <TableRow key={data[i]._id.toString()}>
                                    <TableCell key="comment" style={{ width: "80%" }}>{data[i].comment}</TableCell>
                                    <TableCell key="author" style={{ width: "10%" }}>{data[i].author}</TableCell>
                                    <TableCell className="relative flex items-center gap-3" style={{ width: "10%" }}>
                                        <span className="text-lg text-default-400 cursor-pointer active:opacity-50" 
                                     
                                        >
                                            <CommentModal comment={data[i]} />
                                        </span>
                                        <span
                                            className="text-lg text-danger cursor-pointer active:opacity-50"
                                            onClick={() => handleDelete(i)}
                                        >
                                            <DeleteIcon />
                                        </span>
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                ) : (
                    <TableBody emptyContent={"No rows to display."}>{[]}</TableBody>
                )}
            </Table>
        </div>
    );
}