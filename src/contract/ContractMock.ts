import IContract from 'contract';
import { IPersonIdentifier, IPersonDetail } from 'contract/src/dto/person';

export default class ContractMock implements IContract {
	async Get(personIdentifier: IPersonIdentifier): Promise<IPersonDetail> {
		throw new Error('Method not implemented. Mock');
	}

	async Create(personDetail: IPersonDetail): Promise<IPersonDetail> {
		throw new Error('Method not implemented.');
	}

	async Delete(personIdentifier: IPersonIdentifier): Promise<IPersonDetail> {
		throw new Error('Method not implemented.');
	}
}
