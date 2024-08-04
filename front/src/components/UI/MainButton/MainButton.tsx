import { Button } from "@mantine/core"
import React from "react"

export const MainButton = (props) => {

    return (
        <Button variant="gradient" radius="sm" size="lg" onClick={props.handler} opacity={0.8}>
           {props.label}
        </Button>
    )
}
