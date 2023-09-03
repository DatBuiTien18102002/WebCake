import axiosClient from '~/utils/httpRequest';

const productApi = {
    get: () => {
        const url = '/product';
        return axiosClient.get(url);
    },
    getAll: (params) => {
        const url = '/product';
        return axiosClient.get(url, { params });
    },

    sort: (object) => {
        const url = '/product';
        let params = { _sort: object.nameSort, _order: object.type, _page: object.paginate, _limit: 7 };

        return axiosClient.get(url, { params });
    },
};

export default productApi;
