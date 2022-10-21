const applicants = [];

      function reset() {
        document.getElementById("first_name").value = null;
        document.getElementById("last_name").value = null;
        document.getElementById("Birthday_Day").value = "-1";
        document.getElementById("Birthday_Month").value = "-1";
        document.getElementById("Birthday_Year").value = "-1";
        document.getElementById("email_id").value = null;
        document.getElementById("mobile_number").value = null;
        document.getElementById("gender").value = "-1";
        document.getElementById("address").value = null;
        document.getElementById("city").value = null;
        document.getElementById("pincode").value = null;
        document.getElementById("state").value = null;
        document.getElementById("country").value = null;
        var cbox = document.forms["application"]["hobbies"];
        cbox.forEach((element) => {
          element.checked = false;
        });
        document.getElementById("others_hobby").value = null;
        document.getElementById("classx_board").value = null;
        document.getElementById("classx_percentage").value = null;
        document.getElementById("classx_yearofpass").value = null;
        document.getElementById("classxii_board").value = null;
        document.getElementById("classxii_percentage").value = null;
        document.getElementById("classxii_yearofpass").value = null;
        document.getElementById("Courses").value = "-1";
      }
      function formValidation() {
        var first_name = document.getElementById("first_name").value;
        var last_name = document.getElementById("last_name").value;
        var Birthday_Day = document.getElementById("Birthday_Day").value;
        var Birthday_Month = document.getElementById("Birthday_Month").value;
        var Birthday_Year = document.getElementById("Birthday_Year").value;
        var email_id = document.getElementById("email_id").value;
        var mobile_number = document.getElementById("mobile_number").value;
        var gender = document.getElementById("gender").value;
        var address = document.getElementById("address").value;
        var city = document.getElementById("city").value;
        var pincode = document.getElementById("pincode").value;
        var state = document.getElementById("state").value;
        var country = document.getElementById("country").value;
        var cbox = document.forms["application"]["hobbies"];
        var others_hobby = document.getElementById("others_hobby").value;
        var classx_board = document.getElementById("classx_board").value;
        var classx_percentage =
          document.getElementById("classx_percentage").value;
        var classx_yearofpass =
          document.getElementById("classx_yearofpass").value;
        var classxii_board = document.getElementById("classxii_board").value;
        var classxii_percentage = document.getElementById(
          "classxii_percentage"
        ).value;
        var classxii_yearofpass = document.getElementById(
          "classxii_yearofpass"
        ).value;
        var courses = document.getElementById("Courses").value;

        var letters = /^[A-Za-z_ ]+$/;
        var filter =
          /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var pattern = /^(100(\.0{1,2})?|([0-9]?[0-9](\.[0-9]{1,2})))$/;
        var pattern1 = /^\d{6}$/;
        var pattern2 = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        var patterns = /^(\d{1,2})-(\d{4})$/;

        if (first_name == "") {
          window.alert("Enter your first name");
          document.getElementById("first_name").focus();
          return false;
        } else if (!letters.test(first_name)) {
          window.alert("First Name field required only alphabet characters");
          document.getElementById("first_name").focus();
          return false;
        } else if (document.getElementById("first_name").value.length < 2) {
          window.alert("First Name minimum length is 2");
          document.getElementById("first_name").focus();
          return false;
        } else if (document.getElementById("first_name").value.length > 33) {
          window.alert("First Name maximum length is 33");
          document.getElementById("first_name").focus();
          return false;
        } else if (last_name == "") {
          window.alert("Please enter your last name");
          document.getElementById("last_name").focus();
          return false;
        } else if (!letters.test(last_name)) {
          window.alert("Last Name field required only alphabet characters");
          document.getElementById("last_name").focus();
          return false;
        } else if (document.getElementById("last_name").value.length < 2) {
          window.alert("Last Name minimum length is 2");
          document.getElementById("last_name").focus();
          return false;
        } else if (document.getElementById("last_name").value.length > 33) {
          window.alert("Last Name maximum length is 33");
          document.getElementById("last_name").focus();
          return false;
        } else if (Birthday_Day == "-1") {
          window.alert("Please select your Birthday Day");
          document.getElementById("Birthday_Day").focus();
          return false;
        } else if (Birthday_Month == "-1") {
          window.alert("Please select your Birthday Month");
          document.getElementById("Birthday_Month").focus();
          return false;
        } else if (Birthday_Year == "-1") {
          window.alert("Please select your Birthday Year");
          document.getElementById("Birthday_Year").focus();
          return false;
        } else if (email_id == "") {
          window.alert("Please enter your user email id");
          document.getElementById("email_id").focus();
          return false;
        } else if (!filter.test(email_id)) {
          window.alert("Invalid email id");
          document.getElementById("email_id").focus();
          return false;
        } else if (mobile_number == "") {
          window.alert("Please enter your mobile number");
          document.getElementById("mobile_number").focus();
          return false;
        } else if (!pattern2.test(mobile_number)) {
          window.alert("Mobile Number Should be 10 digits");
          document.getElementById("mobile_number").focus();
          return false;
        } else if (gender == "-1") {
          window.alert("Please select your gender");
          document.getElementById("gender").focus();
          return false;
        } else if (address == "") {
          window.alert("Please enter your address");
          document.getElementById("address").focus();
          return false;
        } else if (document.getElementById("address").value.length < 20) {
          window.alert("Address minimum length is 20");
          document.getElementById("address").focus();
          return false;
        } else if (document.getElementById("address").value.length > 120) {
          window.alert("Address maximum length is 120");
          document.getElementById("address").focus();
          return false;
        } else if (city == "") {
          window.alert("Please enter your city");
          document.getElementById("city").focus();
          return false;
        } else if (document.getElementById("city").value.length < 5) {
          window.alert("City minimum length is 5");
          document.getElementById("city").focus();
          return false;
        } else if (document.getElementById("city").value.length > 32) {
          window.alert("City maximum length is 32");
          document.getElementById("city").focus();
          return false;
        } else if (pincode == "") {
          window.alert("Please enter your pincode");
          document.getElementById("pincode").focus();
          return false;
        } else if (!pattern1.test(pincode)) {
          window.alert("Pincode Should be 6 digits");
          document.getElementById("pincode").focus();
          return false;
        } else if (state == "") {
          window.alert("Please enter your state");
          document.getElementById("state").focus();
          return false;
        } else if (!letters.test(state)) {
          window.alert("State field required only alphabet characters");
          document.getElementById("state").focus();
          return false;
        } else if (document.getElementById("state").value.length < 6) {
          window.alert("state minimum length is 6");
          document.getElementById("state").focus();
          return false;
        } else if (document.getElementById("state").value.length > 33) {
          window.alert("state maximum length is 33");
          document.getElementById("state").focus();
          return false;
        } else if (country == "") {
          window.alert("Please enter your Country");
          document.getElementById("country").focus();
          return false;
        } else if (!letters.test(country)) {
          window.alert("Country field required only alphabet characters");
          document.getElementById("country").focus();
          return false;
        } else if (document.getElementById("country").value.length < 5) {
          window.alert("Country Name minimum length is 5");
          document.getElementById("country").focus();
          return false;
        } else if (document.getElementById("country").value.length > 33) {
          window.alert("Country Name maximum length is 33");
          document.getElementById("country").focus();
          return false;
        } else if (
          cbox[0].checked == false &&
          cbox[1].checked == false &&
          cbox[2].checked == false &&
          cbox[3].checked == false
        ) {
          window.alert("Please select your hobbies");
          document.getElementById("hobbies").focus();
          return false;
        } else if (others_hobby == "") {
          window.alert("Please enter your others hobby");
          document.getElementById("others_hobby").focus();
          return false;
        } else if (!letters.test(others_hobby)) {
          window.alert("Others hobby field required only alphabet characters");
          document.getElementById("others_hobby").focus();
          return false;
        } else if (document.getElementById("others_hobby").value.length < 5) {
          window.alert("Others hobby minimum length is 5");
          document.getElementById("others_hobby").focus();
          return false;
        } else if (document.getElementById("others_hobby").value.length > 40) {
          window.alert("Others hobby maximum length is 40");
          document.getElementById("others_hobby").focus();
          return false;
        } else if (classx_board == "") {
          window.alert("Please enter your class x board");
          document.getElementById("classx_board").focus();
          return false;
        } else if (!letters.test(classx_board)) {
          window.alert("Class x board field required only alphabet characters");
          document.getElementById("classx_board").focus();
          return false;
        } else if (document.getElementById("classx_board").value.length < 6) {
          window.alert("Class x board minimum length is 6");
          document.getElementById("classx_board").focus();
          return false;
        } else if (document.getElementById("classx_board").value.length > 100) {
          window.alert("Class x board maximum length is 100");
          document.getElementById("classx_board").focus();
          return false;
        } else if (classx_percentage == "") {
          window.alert("Please enter your class x percentage");
          document.getElementById("classx_percentage").focus();
          return false;
        } else if (!pattern.test(classx_percentage)) {
          window.alert("Class x percentage field required only numbers");
          document.getElementById("classx_percentage").focus();
          return false;
        } else if (
          document.getElementById("classx_percentage").value.length < 4
        ) {
          window.alert("Class x percentage minimum length is 4");
          document.getElementById("classx_percentage").focus();
          return false;
        } else if (
          document.getElementById("classx_percentage").value.length > 5
        ) {
          window.alert("Class x percentage maximum length is 5");
          document.getElementById("classx_percentage").focus();
          return false;
        } else if (classx_yearofpass == "") {
          window.alert("Please enter your class x month & year of pass");
          document.getElementById("classx_yearofpass").focus();
          return false;
        } else if (!patterns.test(classx_yearofpass)) {
          window.alert(
            "Class x month & year of pass field required only numbers"
          );
          document.getElementById("classx_yearofpass").focus();
          return false;
        } else if (
          document.getElementById("classx_yearofpass").value.length < 5
        ) {
          window.alert("Class x month & year of pass minimum length is 5");
          document.getElementById("classx_yearofpass").focus();
          return false;
        } else if (
          document.getElementById("classx_yearofpass").value.length > 7
        ) {
          window.alert("Class x month & year of pass maximum length is 7");
          document.getElementById("classx_yearofpass").focus();
          return false;
        } else if (classxii_board == "") {
          window.alert("Please enter your class XII board");
          document.getElementById("classxii_board").focus();
          return false;
        } else if (!letters.test(classxii_board)) {
          window.alert(
            "Class XII board field required only alphabet characters"
          );
          document.getElementById("classxii_board").focus();
          return false;
        } else if (document.getElementById("classxii_board").value.length < 6) {
          window.alert("Class XII board minimum length is 6");
          document.getElementById("classxii_board").focus();
          return false;
        } else if (
          document.getElementById("classxii_board").value.length > 100
        ) {
          window.alert("Class XII board maximum length is 100");
          document.getElementById("classxii_board").focus();
          return false;
        } else if (classxii_percentage == "") {
          window.alert("Please enter your class XII percentage");
          document.getElementById("classxii_percentage").focus();
          return false;
        } else if (!pattern.test(classxii_percentage)) {
          window.alert("Class XII percentage field required only numbers");
          document.getElementById("classxii_percentage").focus();
          return false;
        } else if (
          document.getElementById("classxii_percentage").value.length < 4
        ) {
          window.alert("Class XII percentage minimum length is 4");
          document.getElementById("classxii_percentage").focus();
          return false;
        } else if (
          document.getElementById("classxii_percentage").value.length > 5
        ) {
          window.alert("Class XII percentage maximum length is 5");
          document.getElementById("classxii_percentage").focus();
          return false;
        } else if (classxii_yearofpass == "") {
          window.alert("Please enter your class XII month & year of pass");
          document.getElementById("classxii_yearofpass").focus();
          return false;
        } else if (!patterns.test(classxii_yearofpass)) {
          window.alert(
            "Class XII month & year of pass field required only numbers"
          );
          document.getElementById("classxii_yearofpass").focus();
          return false;
        } else if (
          document.getElementById("classxii_yearofpass").value.length < 5
        ) {
          window.alert("Class XII month & year of pass minimum length is 5");
          document.getElementById("classxii_yearofpass").focus();
          return false;
        } else if (
          document.getElementById("classxii_yearofpass").value.length > 7
        ) {
          window.alert("Class XII month & year of pass maximum length is 7");
          document.getElementById("classxii_yearofpass").focus();
          return false;
        } else if (courses == "-1") {
          window.alert("Please select your courses");
          document.getElementById("courses").focus();
          return false;
        } else {
          window.alert("Thank You for Application");
        }

        const cboxValues = [];
        cbox.forEach((element) => {
          if (element.checked) {
            cboxValues.push(element.value);
          }
        });

        const applicant = {
          FirstName: first_name,
          LastName: last_name,
          BirthdayDay: Birthday_Day,
          BirthdayMonth: Birthday_Month,
          BirthdayYear: Birthday_Year,
          EmailId: email_id,
          MobileNumber: mobile_number,
          Gender: gender,
          Address: address,
          City: city,
          Pincode: pincode,
          State: state,
          Country: country,
          cboxValues: cboxValues,
          OthersHobby: others_hobby,
          ClassXBoard: classx_board,
          ClassXPercentage: classx_percentage,
          ClassXYearofpass: classx_yearofpass,
          ClassXIIBoard: classxii_board,
          ClassXIIPercentage: classxii_percentage,
          ClassXIIYearofpass: classxii_yearofpass,
          Courses: courses,
        };

        applicants.push(applicant);
        reset();

        const myJSON = JSON.stringify(applicants);
        document.getElementById("response").innerHTML = myJSON;
        console.log("myJSON", myJSON);
        localStorage.setItem("applicant", myJSON);
        // localStorage.clear();
      }

      function retrieve() {
        var first_nameField = document.getElementById("first_name");

        applicants.forEach((applicant) => {

          if (applicant.FirstName == first_nameField.value) {
            var last_nameField = document.getElementById("last_name");
            var Birthday_DayField = document.getElementById("Birthday_Day");
            var Birthday_MonthField = document.getElementById("Birthday_Month");
            var Birthday_YearField = document.getElementById("Birthday_Year");
            var email_idField = document.getElementById("email_id");
            var mobile_numberField = document.getElementById("mobile_number");
            var genderField = document.getElementById("gender");
            var addressField = document.getElementById("address");
            var cityField = document.getElementById("city");
            var pincodeField = document.getElementById("pincode");
            var stateField = document.getElementById("state");
            var countryField = document.getElementById("country");
            var cboxField = document.forms["application"]["hobbies"];
            var others_hobbyField = document.getElementById("others_hobby");
            var classx_boardField = document.getElementById("classx_board");
            var classx_percentageField = document.getElementById("classx_percentage");
            var classx_yearofpassField = document.getElementById("classx_yearofpass");
            var classxii_boardField = document.getElementById("classxii_board");
            var classxii_percentageField = document.getElementById("classxii_percentage");
            var classxii_yearofpassField = document.getElementById("classxii_yearofpass");
            var coursesField = document.getElementById("Courses");

            first_nameField.value = applicant.FirstName;
            last_nameField.value = applicant.LastName;
            Birthday_DayField.value = applicant.BirthdayDay;
            Birthday_MonthField.value = applicant.BirthdayMonth;
            Birthday_YearField.value = applicant.BirthdayYear;
            email_idField.value = applicant.EmailId;
            mobile_numberField.value = applicant.MobileNumber;
            genderField.value = applicant.Gender;
            addressField.value = applicant.Address;
            cityField.value = applicant.City;
            pincodeField.value = applicant.Pincode;
            stateField.value = applicant.State;
            countryField.value = applicant.Country;
            cboxField.forEach((element) => {
              applicant.cboxValues.forEach((element1) => {
                if (element.value == element1) {
                  element.checked = true;
                }
              });
            });
            others_hobbyField.value = applicant.OthersHobby;
            classx_boardField.value = applicant.ClassXBoard;
            classx_percentageField.value = applicant.ClassXPercentage;
            classx_yearofpassField.value = applicant.ClassXYearofpass;
            classxii_boardField.value = applicant.ClassXIIBoard;
            classxii_percentageField.value = applicant.ClassXIIPercentage;
            classxii_yearofpassField.value = applicant.ClassXIIYearofpass;
            coursesField.value = applicant.Courses;
            return;
          }
        });
      }
    