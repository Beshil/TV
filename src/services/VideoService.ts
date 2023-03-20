import { useHttp } from '../hooks/http.hook';

const useVideoService = () => {
  const { request, clearError, process, setProcess } = useHttp();
  const _apiBase = 'http://fedevofferapi-info3.b4a.run/';

  const getAllVideo = async () => {
    const res = await request(`${_apiBase}list`);
    return res.data.results;
  };

  const getVideo = async (id: number) => {
    const res = await request(`${_apiBase}items/${id}`);
    return res.data.results;
  };

  const getAllComments = async (id: number) => {
    const res = await request(`${_apiBase}comments/${id}`);
    return res.data.results;
  };

  const createComment = async (id: number, data: object) => {
    const res = await request(`${_apiBase}comments/${id}`, 'POST', data);
    return res.data.results;
  };

  return {
    process,
    setProcess,
    clearError,
    getAllVideo,
    getVideo,
    getAllComments,
    createComment,
  };
};

export default useVideoService;
