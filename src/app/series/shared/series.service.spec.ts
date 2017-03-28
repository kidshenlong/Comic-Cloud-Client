import {TestBed, inject, async} from "@angular/core/testing";
import {SeriesService} from "./series.service";
import {MockBackend} from "@angular/http/testing";
import {BaseRequestOptions, Http, HttpModule, Response, ResponseOptions} from "@angular/http";

// Based on: http://kendaleiv.com/angular-2-mockbackend-service-testing-template-using-testbed/

describe('SeriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SeriesService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backend, options) => new Http(backend, options),
          deps: [MockBackend, BaseRequestOptions]
        }
      ],
      imports: [
        HttpModule
      ]
    });
  });

  it('should ...', inject([SeriesService], (service: SeriesService) => {
    expect(service).toBeTruthy();
  }));

  describe('getSeries', () =>{

    it('should return a result when user can be found', async(inject(
      [SeriesService, MockBackend], (service, mockBackend) => {

        mockBackend.connections.subscribe(conn => {
          conn.mockRespond(new Response(new ResponseOptions({ body: JSON.stringify([])})));
        });

        const result = service.getSeries();

        result.subscribe(res => {
          expect(res).toEqual({});
        });
      })));

  });
});
