import SEOLayout from "../components/shared/SEOLayout";
import { Table } from "react-bootstrap";
import { clientsData } from "../shared/data/clientsData";

const clients = () => {
    return (
        <>
            <SEOLayout title="Honorable Clients | ziatech" />
            <section className="bg-dark py-5 text-white">
                <h1 className="text-center">Honorable Clients</h1>
            </section>
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 offset-md-1">
                            <Table responsive bordered hover variant="success">
                                <thead>
                                    <th>Ser. No. <br />
                                        ক্রমিক নং </th>
                                    <th>
                                        Company’s Name & Address <br />
                                        কোম্পানির নাম ও ঠিকানা
                                    </th>
                                    <th>
                                        Director / Proprietor’s Name <br />
                                        পরিচালক বা স্বত্বাধিকারীর নাম
                                    </th>
                                </thead>
                                <tbody>
                                    {clientsData.map(item => <TableRow data={item} key={item.id} />)}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default clients;

const TableRow = ({ data }) => {
    return (
        <>
            <tr>
                <td>{data.id} </td>
                <td dangerouslySetInnerHTML={{ __html: data.company }} ></td>
                <td dangerouslySetInnerHTML={{ __html: data.owner }} ></td>
            </tr>
        </>
    )
}