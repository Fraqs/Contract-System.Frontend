import Contract from './contract';
import IContract from 'contract';

(async () => {
	try {
		const contract: IContract = new Contract();
		await contract.Get({ ID: 'test' });
	} catch (error) {
		console.log(error.message);
	}
})();
