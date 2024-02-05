'use client'
import React, { useState, useEffect } from "react";
import { Input, Button, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { DeleteIcon } from "@/components/icons";
import CommentModal from "./CommentModal";
import { ObjectId } from "mongodb";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { comment } from "@/redux/slices/commentSlice";


interface CommentItem {
    comment: string;
    _id: ObjectId;
    author: string;
    parent: ObjectId;
}


export default function Comment({ player }: any) {
    let [comment, setComment] = useState('')
    let [data, setData] = useState<CommentItem[]>([]);
    // let commentData = useAppSelector((state) => state.comment)
    // let dispatch = useAppDispatch()

    useEffect(() => {
        fetch('/api/comment/list?id=' + player._id).then(r => r.json()).then((result) => {
            setData(result)
        })
    }, [player._id]);

    const submitHandler = () => {
        fetch('/api/comment/new', {
            method: 'POST',
            body: JSON.stringify({
                comment: comment,
                _id: player._id
            })
        }).then(() => fetch('/api/comment/list?id=' + player._id).then(r => r.json()).then((result) => {
            setData(result)
        }))
    }

    const handleDelete = (i: number) => {

        fetch('/api/comment/delete', {
            method: 'DELETE',
            body: JSON.stringify(data[i]._id),
        }).then(() => fetch('/api/comment/list?id=' + player._id).then(r => r.json()).then((result) => {
            setData(result)
        }))
    }

    return (
        <div className="grid grid-cols-1 justify-center">
            <Table aria-label=" Example static collection table" className=" grid w-full justify-center" >
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
            <div className=" grid w-full justify-center">
                <Input size="lg" placeholder="Write Comment"
                    onChange={(e) => { setComment(e.target.value) }}
                    endContent={<Button onPress={submitHandler}>submit</Button>} />
            </div>
        </div>
    );
}