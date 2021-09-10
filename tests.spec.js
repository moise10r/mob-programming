const timeTo12HrFormat = require('./timeTo12HrFormat')

describe('Tests', function () {
  it(' should return the time be in 12 format.', function () {
    expect(timeTo12HrFormat('24:30:00') === '12:30:00')
  })

  it(' should return the time be in 12 format.', function () {
    expect(timeTo12HrFormat('20:20:03') === '8:20:03')
  })
  it(' should return the time be in 12 format.', function () {
    expect(timeTo12HrFormat('7:00:00') === '7:00:00')
  })

})
