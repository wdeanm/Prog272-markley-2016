/**
 * Created by bcuser on 5/9/16.
 */


fdescribe('Elvenware spec-routs.js Suite', function () {
    'use strict';

    it('shows we can test', function () {
        expect(true).toBe(true);
    });

    it('renewables', function (done) {
        request(app)
            .get('/renewables')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function (err, res) {
                if (err) throw err;
                done();
            });
    });

    fit('renewables first object body', function (done) {
        request(app)
            .get('/renewables')
            .expect(200)
            .expect('Content-Type', /json/)
            .expect(function(response) {
                expect(response.body.result).toBe('Success');
                console.log(response.body.renewables);
                expect(response.body.renewables[0].Year).toBe('2017');
            })
            .end(function (err, res) {
                if (err) throw err;
                done();
            });
    });

    fit('renewables first object body', function (done) {
        request(app)
            .get('/renewables')
            .expect(200)
            .expect('Content-Type', /json/)
            .expect(function(response) {
                expect(response.body.result).toBe('Success');
                console.log(response.body.renewables);
                expect(response.body.renewables[0].Year).toBe('2017');
            })
            .end(function (err, res) {
                if (err) throw err;
                done();
            });
    });
});
