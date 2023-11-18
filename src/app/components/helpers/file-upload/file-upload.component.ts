import { Component, Input } from '@angular/core';
import { FileUploadService } from 'src/app/services/file-upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {
  @Input() title: string | undefined;
  @Input() showUploadedFiles: boolean = false;
  uploadedFiles: File[] = [];
  lastUploadedFile: File | undefined;

  constructor(private fileUploadService: FileUploadService) {
    this.fileUploadService.uploadedFiles$.subscribe(files => {
      this.uploadedFiles = files;
      this.lastUploadedFile = files.length > 0 ? files[files.length - 1] : undefined;
    });
  }

  onFilesSelected(event: any) {
    const selectedFiles: File[] = event.target.files;
    this.fileUploadService.addUploadedFiles(selectedFiles);
  }

  downloadFile(file: File) {
    this.fileUploadService.downloadUploadedFile(file);
  }

  removeFile(file: File) {
    this.fileUploadService.removeUploadedFile(file);
  }
}
