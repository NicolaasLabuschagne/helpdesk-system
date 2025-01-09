export interface Ticket {
  ticketId?: number;
  title: string;
  description: string;
  status?: string;
  priority?: string;
  createdBy?: number;
  assignedTo?: number;
  createdDate?: Date;
  updatedDate?: Date;
}
