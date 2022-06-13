import { Table } from "./table/Table";

interface RepositoryItemProps {
    repository: {
        name: string;
        description: string;
        html_url: string;
    }
}


export function RepositoryItem(props: RepositoryItemProps) {
    return (
        <li>
            <Table key={props.repository.name} repository={props.repository} />

        </li>
    );
}