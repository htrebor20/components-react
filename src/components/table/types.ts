type Item = {
    id: string
    label: string
}

export type TableProps = {
    dataHead: Item[];
    content: Record<string, string>[];
}

