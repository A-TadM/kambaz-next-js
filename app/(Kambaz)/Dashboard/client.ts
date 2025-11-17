/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";


const axiosWithCredentials = axios.create({ withCredentials: true });

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const ENROLLMENTS_API = `${HTTP_SERVER}/api/enrollments`;
const USERS_API = `${HTTP_SERVER}/api/users`;

export const fetchAllEnrollments = async () => {
  const { data } = await axiosWithCredentials.get(ENROLLMENTS_API);
  return data;
};

export const deleteEnrollment = async (id: string) => {
  const response = await axiosWithCredentials.delete(`${ENROLLMENTS_API}/${id}`);
  return response.data;
};

export const addEnrollment = async (course: any) => {
  const response = await axiosWithCredentials.post(`${USERS_API}/current/enrollments`, course);
  return response.data;
};