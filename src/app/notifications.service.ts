import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(
    private snackBar: MatSnackBar
  ) { }

  notification(message: string) {
    this.snackBar.open(message, "Ok", {
      duration: 2000,
      verticalPosition: "top",
      horizontalPosition: "center"
    })
  }

}
