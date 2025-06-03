import { fetchData } from './api';

const NUMBER_OF_WELLS = 16;

const queryAllWells = async (start, end, key) => {
    let endpoint = `/payload/wells`
    
    if (key == 'temperature') endpoint += `/temp`
    else if (key == 'luminosity') endpoint += `/lumin`

    const params = new URLSearchParams({start: dateToRFC(start), end: dateToRFC(end)})

    const requests = Array.from({ length: NUMBER_OF_WELLS }, (_, i) =>
        fetchData(`${endpoint}/${i + 1}?${params.toString()}`)
    );

    const responses = await Promise.all(requests);

    return responses.map((wellData) =>
        wellData.map(item => [item.timestamp, item[key]])
    );
};

export const fetchExperiment = async (start, end) => {
    const [temperature, luminosity] = await Promise.all([
        queryAllWells(start, end, 'temperature'),
        queryAllWells(start, end, 'luminosity')
    ]);
    return { temperature, luminosity };
};

const dateToRFC = (d) => {
    // removes the fractional seconds from the ISO string
    return d.toISOString().replace(/\.\d{3}Z$/, 'Z');
}