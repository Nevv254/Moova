    startDateInput.addEventListener('change', updateTotalPrice);
    endDateInput.addEventListener('change', updateTotalPrice);

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const booking = {
        item: document.getElementById('item-name').value,
        rate: dailyRateInput.value,
        startDate: startDateInput.value,
        endDate: endDateInput.value,
        total: totalPrice.value
      };

      // Save booking to localStorage
      let bookings = JSON.parse(localStorage.getItem('moovaBookings')) || [];
      bookings.push(booking);
      localStorage.setItem('moovaBookings', JSON.stringify(bookings));

      confirmationMsg.classList.remove('hidden');
      form.reset();
      totalPrice.value = '';
    });
  
    
    const form = document.getElementById('booking-form');
    const dailyRateInput = document.getElementById('daily-rate');
    const totalPrice = document.getElementById('total-price');
    const startDateInput = document.getElementById('start-date');
    const endDateInput = document.getElementById('end-date');
    const confirmationMsg = document.getElementById('confirmation-msg');

    function calculateDays(start, end) {
      const s = new Date(start);
      const e = new Date(end);
      const timeDiff = e - s;
      return Math.ceil(timeDiff / (1000 * 3600 * 24));
    }

    function updateTotalPrice() {
      const start = startDateInput.value;
      const end = endDateInput.value;
      const dailyRate = parseInt(dailyRateInput.value);

      if (start && end) {
        const days = calculateDays(start, end);
        if (days > 0) {
          totalPrice.value = `Ksh ${days * dailyRate}`;
        } else {
          totalPrice.value = 'Invalid range';
        }
      }
    }
