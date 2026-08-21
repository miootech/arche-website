/**
 * arche. — TypeScript Typen (v2)
 */

export type ReviewStatus = "pending" | "approved" | "rejected";
export type ReviewType = "real" | "test";

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  project?: string;
  status: ReviewStatus;
  featured: boolean;
  type: ReviewType;
  authorUid?: string; // UID des Users, der die Bewertung geschrieben hat
  createdAt: number;
  approvedAt?: number;
}

export interface ReviewInput {
  name: string;
  rating: number;
  text: string;
  project?: string;
}

export interface ArcheUser {
  uid: string;
  email: string | null;
  displayName: string | null;
}

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  projectType: string;
  budget?: string;
  message: string;
}
