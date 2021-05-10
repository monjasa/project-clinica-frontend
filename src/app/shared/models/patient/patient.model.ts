interface PatientModel {
  id: number;
  user: UserModel;
  occupation: string;
  insuranceNumber: string;
  medicalRecord: MedicalRecordModel;
}
