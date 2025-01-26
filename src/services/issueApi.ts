import {
  IIsseResponseMultiple,
  IIsseResponseSingle,
  IIssueTrackingData,
} from "../interface/issue";

const BaseUrl = import.meta.env.VITE_BASE_API_URL;

export const getAllIssueTrackingData =
  async (): Promise<IIsseResponseMultiple> => {
    const response = await fetch(`${BaseUrl}/api/issues`);
    return response.json();
  };
export const getIssueTrackingDataById = async (
  id: string
): Promise<IIsseResponseSingle> => {
  const response = await fetch(`${BaseUrl}/api/issues/${id}`);
  return response.json();
};
export const deleteIssueTrackingData = async (
  id: string
): Promise<IIsseResponseSingle> => {
  const response = await fetch(`${BaseUrl}/api/issues/${id}`, {
    method: "DELETE",
  });
  return response.json();
};

export const addIssueTrackingData = async (
  data: IIssueTrackingData
): Promise<IIsseResponseSingle> => {
  const response = await fetch(`${BaseUrl}/api/issues`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const updateIssueTrackingData = async (
  id: string,
  data: IIssueTrackingData
) => {
  const response = await fetch(`${BaseUrl}/api/issues/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
};
