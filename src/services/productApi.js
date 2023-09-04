import axiosClient from '~/utils/httpRequest';

const resourceName = '/product';

const productApi = {
    getAll: (params) => {
        return axiosClient.get(resourceName, { params });
    },

    sort: (object) => {
        let params = { _sort: object.nameSort, _order: object.type, _page: object.paginate, _limit: 7 };

        return axiosClient.get(resourceName, { params });
    },
    search: (q) => {
        const params = { q };
        return axiosClient.get(resourceName, { params });
    },
};

export default productApi;
