describe('getCurrentUIValues', () => {
    it('should execute without throwing error', function () {
      expect(() => {
        getCurrentUIValues()
      }).not.toThrowError();
    })
    // ????? ANY OTHER TEST I CAN THINK OF WOULD BE REDUNDANT
  })
  
  
  describe('setUpInitialValues', () => {
    it('should execute without throwing an error', function () {
      expect(() => {
        setupIntialValues();
      }).not.toThrowError();
    })
  
  })
  
  describe('update', () => {
    // checks to see if update() throws an error
    it('should execute its nested functions without throwing error', function () {
      expect(() => {
        update()
      }).not.toThrowError();
    })
  
  })
  
  describe('calculateMonthlyPayment', () => {
  
    it('should calculate the monthly rate correctly with 2 decimal places', function () {
  
      expect(calculateMonthlyPayment(100, 1, 0.20)).toEqual(9.26)
  
      expect(calculateMonthlyPayment(2000, 5, 0.15)).toEqual(47.58)
  
    })
  })
  
  afterEach(() => {
    document.getElementById("loan-amount").value = 1000;
    document.getElementById("loan-years").value = 2;
    document.getElementById("loan-rate").value = 0.1;
    monthlyPaymentElement.textContent = ""
  })