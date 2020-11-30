import Contract from 'backend';
import ContractMock from './ContractMock';

import * as dotenv from 'dotenv';
dotenv.config();

/** Dependency injection... ish */
const development: boolean = process.env.NODE_ENV === 'development';
development && console.warn('ATT:: Running ContractMock on development environment, change .evn for production.');

export default development ? ContractMock : Contract;
