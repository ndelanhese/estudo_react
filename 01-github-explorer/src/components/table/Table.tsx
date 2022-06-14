import '../../styles/global.scss'
import '../../styles/table.scss'


interface RepositoryItemProps {
    repository: {
        name: string;
        description: string;
        html_url: string;
    }
}



function verifica(props: RepositoryItemProps) {

    if (props.repository.description == null) {
        return "The repository description is empty.";
    } else {
        return props.repository.description;
    }
}


export function Table(props: RepositoryItemProps) {
    return (
        <>
            <table >



                <tr>
                    <th >Nome:</th>
                    <th>Descrição:</th>
                    <th>Link:</th>
                </tr>
                <tr>
                    <td><strong> {props.repository.name} </strong></td>
                    <td><p>{verifica(props)}</p></td>
                    <td><a target="_blank" href={props.repository.html_url}>Acessar Repositório</a></td>
                </tr>
            </table>


        </>
    );
}