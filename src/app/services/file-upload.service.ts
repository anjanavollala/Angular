import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  private uploadedFilesSubject: BehaviorSubject<File[]> = new BehaviorSubject<File[]>([]);
  uploadedFiles$: Observable<File[]> = this.uploadedFilesSubject.asObservable();

  getUploadedFiles(): File[] {
    return this.uploadedFilesSubject.value;
  }

  addUploadedFiles(files: File[]) {
    const currentFiles = this.uploadedFilesSubject.value;
    this.uploadedFilesSubject.next([...currentFiles, ...files]);
  }

  downloadUploadedFile(file: File) {
    const link = document.createElement('a');
    link.href = URL.createObjectURL(file);
    link.download = file.name;
    link.click();
  }

  removeUploadedFile(file: File) {
    const currentFiles = this.uploadedFilesSubject.value;
    const updatedFiles = currentFiles.filter(f => f !== file);
    this.uploadedFilesSubject.next(updatedFiles);
  }
}
