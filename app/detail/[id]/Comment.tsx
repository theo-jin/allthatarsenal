'use client'
import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { useState, useEffect } from "react";
import { EditIcon } from "@/components/icons";
import { DeleteIcon } from "@/components/icons";

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
    // let [comment, setComment] = useState('')
    // let [data, setData] = useState<CommentItem[]>([]);

    // useEffect(() => {
    //     fetch('/api/comment/list?id=' + player._id).then(r => r.json()).then((result) => {
    //         setData(result)
    //     })
    // }, [data]);

    // const handleDelete = () => {
    //     fetch('/api/comment/delete', {
    //         method: 'DELETE',
    //         body: comment._id
    //     }).then(() => { setVisible(false) })
    // };
    return (
        <div className="flex justify-center">
            <Table aria-label="Example static collection table">
                <TableHeader>
                    <TableColumn>NAME</TableColumn>
                    <TableColumn>AUTHOR</TableColumn>
                    <TableColumn>EDIT & DELETE</TableColumn>
                </TableHeader>
                <TableBody>
                    <TableRow key="1">
                        <TableCell key="comment">Tony Reichert</TableCell>
                        <TableCell key="author">{player.name}</TableCell>
                        <TableCell className="relative flex items-center gap-3">
                            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                <EditIcon />
                            </span>
                            <span className="text-lg text-danger cursor-pointer active:opacity-50">
                                <DeleteIcon />
                            </span>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
}