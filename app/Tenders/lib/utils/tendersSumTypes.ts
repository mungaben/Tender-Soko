





export type Tender = {
    _id: string;
    sponsored: boolean;
    title: string;
    referenceNumber: string;
    closingDate: string; // This should be a date string, adjust the type accordingly
    category: string;
    sector:string
  }