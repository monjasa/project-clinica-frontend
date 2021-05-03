import { ServerDataSource } from 'ng2-smart-table';
import { HttpParams } from '@angular/common/http';

export class CustomServerDataSource extends ServerDataSource {


  protected addSortRequestParams(httpParams: HttpParams): HttpParams {
    if (this.sortConf) {
      this.sortConf.forEach(fieldConf => {
        httpParams = httpParams.set(this.conf.sortFieldKey, `${fieldConf.field},${fieldConf.direction}`);
      });
    }
    return httpParams;
  }

  protected addPagerRequestParams(httpParams: HttpParams): HttpParams {
    if (this.pagingConf && this.pagingConf['page'] && this.pagingConf['perPage']) {
      httpParams = httpParams.set(this.conf.pagerPageKey, String(this.pagingConf['page'] - 1));
      httpParams = httpParams.set(this.conf.pagerLimitKey, this.pagingConf['perPage']);
    }
    return httpParams;
  }
}
