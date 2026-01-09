// API functions for the Experiment tab

import { fetchData } from './api';
import { dateToRFC } from './utils';

const NUMBER_OF_VARIANTS = 2;

const queryMagFieldData = async (start, end) => {
    let endpoint = `adcs/magf`

    const params = new URLSearchParams({start: dateToRFC(start), end: dateToRFC(end)})

    const requests = Array.from({ length: NUMBER_OF_VARIANTS }, (_, i) => 
        fetchData(`${endpoint}/${i + 1}?${params.toString()}`),
    );

    const responses = await Promise.all(requests);
    const magFieldDataArray = [];

    return responses.map((magfieldData) => 
        magfieldData.map(item => [item.variant, item.timestamp, item.X, item.Y, item.Z]),
        console.log(responses.length)
    );
}

export const fetchMagneticField = async (start, end) => {

    const magnetic = await queryMagFieldData(start, end);
    return { magnetic };
};
