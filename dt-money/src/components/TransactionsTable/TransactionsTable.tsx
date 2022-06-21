import { useEffect } from "react";
import { Container } from "./styles";


const TransactionsTable = () => {

    useEffect(() => {
        fetch('https://localhost:3000/api/transactions')
        .then(response => response.json())
        .then(data => console.log(data));
    }, [])

    return (<Container>
        <table>
            <thead>
                <tr>
                    <th>Título</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Data</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td >Desenvolvimento de WebSite</td>
                    <td className='deposit'>R$12.000,00</td>
                    <td>Desenvolvimento</td>
                    <td>20/02/2021</td>
                </tr>
                <tr>
                    <td>Aluguel</td>
                    <td className='withDraw'> - R$850,00</td>
                    <td>Casa</td>
                    <td>22/02/2021</td>
                </tr>

            </tbody>
        </table>
    </Container>
    );
}
export default TransactionsTable;