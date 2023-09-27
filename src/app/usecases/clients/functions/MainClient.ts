import IClient from "../../../entities/IClient";
import IUsecasesClient from "../IUsecasesClient";
import addClient, { ClientResponse } from "./AddClient";
import deleteClient from "./DeleteClient";
import findByNumber from "./FindByNumber";
interface paramsClient {
    id: string
}

class MainClient implements IUsecasesClient {
    async AddClient(data: IClient): Promise<ClientResponse> {
        return addClient(data)
    }
    async FindByNumber(number: string): Promise<ClientResponse> {
        return findByNumber(number)
    }
    async DeleteClient(data: any, params: paramsClient): Promise<ClientResponse> {
        return deleteClient(params.id)
    }
}

export default MainClient