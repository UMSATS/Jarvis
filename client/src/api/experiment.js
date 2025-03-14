import { fetchData } from './api';

const queryAllWells = async (endpoint, period, dataKey) => {
    const requests = Array.from({ length: 16 }, (_, i) =>
        fetchData(`${endpoint}/${i + 1}?period=${period}`)
    );

    const responses = await Promise.all(requests);

    return responses.map((wellData) =>
        wellData.map(item => [item.timestamp, item[dataKey]])
    );
};

const queryTemps = async (period) => {
    return queryAllWells(`/payload/wells/temp`, period, 'temperature');
}

const queryLumins = async (period) => {
    return queryAllWells(`/payload/wells/lumin`, period, 'luminosity');
}

export const fetchExperiment = async (period) => {
    const [temperature, luminosity] = await Promise.all([
        queryTemps(period),
        queryLumins(period)
    ]);
    return { temperature, luminosity };
};