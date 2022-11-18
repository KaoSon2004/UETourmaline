import axiosConfig from '~/utils/axiosConfig';

export const apiLogin = (payload) =>
    new Promise(async (resolve, reject) => {
        try {
            console.log(JSON.stringify(payload));
            const response = await axiosConfig({
                method: 'get',
                url: '/api/user/login',
                data: JSON.stringify(payload),
            });
            resolve(response);
        } catch (err) {
            reject(err);
        }
    });
