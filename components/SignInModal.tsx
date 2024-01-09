'use client'
import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link } from "@nextui-org/react";
import { MailIcon } from "@/components/icons";
import { LockIcon } from "@/components/icons";
import { signIn } from 'next-auth/react';

export const SignInModal = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // 사용자가 입력한 사용자 이름(username)과 비밀번호(password)를 가져옵니다.
        const username = e.target.username.value;
        const password = e.target.password.value;

        // signIn 함수를 사용하여 자체 로그인 요청을 보냅니다.
        const result = await signIn('credentials', {
            username,
            password,
            // 필요한 경우 다른 필드도 추가할 수 있습니다.
        });

        // 로그인이 성공하면 다음 페이지로 이동할 수 있습니다.
        if (result.error) {
            // 로그인 실패 시 오류 메시지를 처리할 수 있습니다.
            console.error(result.error);
        }
    };
    return (
        <>
            <Button
                className="text-sm font-normal text-default-600 bg-default-100 mr-2"
                variant="flat"
                onPress={onOpen}>Sign In</Button>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="top-center"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <form onSubmit={handleSubmit}>
                                <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
                                <ModalBody>
                                    <Input
                                        autoFocus
                                        endContent={
                                            <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                        }
                                        label="email"
                                        placeholder="Enter your email"
                                        variant="bordered"
                                    />
                                    <Input
                                        endContent={
                                            <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                        }
                                        label="Password"
                                        placeholder="Enter your password"
                                        type="password"
                                        variant="bordered"
                                    />

                                </ModalBody>
                                <ModalFooter>
                                    <Button color="danger" variant="flat" onPress={onClose}>
                                        Close
                                    </Button>
                                    <Button color="primary" type="submit" onPress={onClose}>
                                        Sign in
                                    </Button>
                                </ModalFooter>
                            </form>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
