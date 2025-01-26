export interface IIssueTrackingData {
  id: number;
  room: string;
  type: string;
  subType: string;
  observation: string;
  impact: string;
  inspectionImg: string;
  remarks: string;
  refCode1: string;
  refCode2: string;
  _id: string;
}

export interface IIssueResponseBase<T> {
  data: T;
  message?: string;
  error?: string;
}

export interface IIsseResponseSingle
  extends IIssueResponseBase<IIssueTrackingData> {}
export interface IIsseResponseMultiple
  extends IIssueResponseBase<IIssueTrackingData[]> {}
