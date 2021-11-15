import { Component } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {

  }

  async startScan() {
    const camPermission = await BarcodeScanner.checkPermission({ force: true });
    console.log('Has permission', camPermission);

    if (!camPermission.granted) {
      return false;
    }

    const result = await BarcodeScanner.startScan();
    console.log(result);
    if (result.hasContent) {
      return result.content;
    }
  }
}
