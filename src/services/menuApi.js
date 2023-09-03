import axiosClient from '~/utils/httpRequest';

const menuApi = {
    getAll: (params) => {
        const url = '/menu';
        return axiosClient.get(url, { params });
    },
};

export default menuApi;
