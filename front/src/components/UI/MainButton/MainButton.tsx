import { Button } from "@mantine/core"
import React from "react"

export const MainButton = (props) => {

    return (
        <Button variant="gradient" radius="xl">
           {props.label}
        </Button>
    )
}
