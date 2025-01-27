import {
  IIsseResponseMultiple,
  IIsseResponseSingle,
  IIssueTrackingData,
} from "../interface/issue";

const BaseUrl = import.meta.env.VITE_BASE_API_URL;

interface IPagination {
  page?: number;
  pageSize?: number;
}

export const getAllIssueTrackingData =
  async ({}: IPagination): Promise<IIsseResponseMultiple> => {
    const response = await fetch(`${BaseUrl}/issues`);
    return response.json();
  };
export const getIssueTrackingDataById = async (
  id: string
): Promise<IIsseResponseSingle> => {
  const response = await fetch(`${BaseUrl}/issues/${id}`);
  return response.json();
};
export const deleteIssueTrackingData = async (
  id: string
): Promise<IIsseResponseSingle> => {
  const response = await fetch(`${BaseUrl}/issues/${id}`, {
    method: "DELETE",
  });
  return response.json();
};

export const addIssueTrackingData = async (
  data: IIssueTrackingData
): Promise<IIsseResponseSingle> => {
  const response = await fetch(`${BaseUrl}/issues`, {
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
  data: Omit<IIssueTrackingData, "_id" | "id">
): Promise<IIsseResponseSingle> => {
  const response = await fetch(`${BaseUrl}/issues/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const deleteManyIssueTrackingDataByIds = async (
  ids: string[]
): Promise<IIsseResponseMultiple> => {
  const response = await fetch(`${BaseUrl}/issues`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ids }),
  });
  return response.json();
};
