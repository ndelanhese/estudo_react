import '../../styles/global.scss'
import '../../styles/table.scss'


interface RepositoryItemProps {
    repository: {
        name: string;
        description: string;
        html_url: string;
    }
}


export function Table(props: RepositoryItemProps) {
    return (
        <>
            <table >
                <tr>
                    <th>Nome</th>
                    <th>Descricao</th>
                    <th>Link</th>
                </tr>
                <tr>
                    <td><strong> {props.repository.name} </strong></td>
                    <td><p>{props.repository.description}</p></td>
                    <td><a target="_blank" href={props.repository.html_url}>Acessar Repositório</a></td>
                </tr>
            </table>


        </>
    );
}