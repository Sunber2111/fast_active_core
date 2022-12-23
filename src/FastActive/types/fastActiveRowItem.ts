export interface FastActiveRowItem {
  id: string;
  name: string;
  courseActive: string[];
  courseNonActive: CourseNonActive[];
}

export interface CourseNonActive {
  orderId: string;
  courseIds: string[];
  CreatedDate: string[];
}
