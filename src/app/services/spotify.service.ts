import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class SpotifyService {
  constructor(private http: HttpClient) {}
  getNewReleases() {
    const headers = new HttpHeaders({
      Authorization:
        "Bearer BQD5vnfeDTGTM0XGYGteQc20fkD6rr92UH8oXtDw8hIoqDfZcmLZ8RnklVrivQlzTiW5F3lPfzCPrW2Udec"
    });

    this.http.get("https://api.spotify.com/v1/browse/new-releases",{headers}).subscribe( data => {
      console.log('data',data);
    })
  }
}
