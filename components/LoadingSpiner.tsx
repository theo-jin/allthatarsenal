'use client'

import React from "react";
import { Spinner } from "@nextui-org/react";

export const LoadingSpiner = () => {
    return (
        <div className="flex gap-4">

            <Spinner size="lg" />
        </div>
    );
}
