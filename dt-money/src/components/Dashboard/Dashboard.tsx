import Summary from '../Summary/Summary';
import TransactionsTable from '../TransactionsTable/TransactionsTable';

import { Container } from './styles';

const Dashboard = () => {
    return (
    <Container>
        <Summary />
        <TransactionsTable />
    </Container>);
}

export default Dashboard;