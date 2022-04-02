<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <script defer src="script.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous" />
    <title>Student Enrollment Form</title>
</head>

<body>
    <div class="nav-bar d-flex">
        <h2>STUDENT ENROLLMENT FORM</h2>
    </div>

    <div class="students row">

        <div class="enroll-student col-md">

            <form action="" id="userForm" class="main-form form-check needs-validation" novalidate>
                <div class="form-group row">
                    <label for="name" class="col-sm-2 col-form-label">Name</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" minlength="4" id="name" required />
                        <div class="invalid-feedback">*Please enter your name(min-lenght is 4).</div>

                    </div>
                </div>

                <div class="form-group row">
                    <label for="email" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                        <input type="email" class="form-control" id="email" required />
                        <div class="invalid-feedback">*Please enter  valid email address.</div>
                    </div>
                </div>

                <div class="form-group row">
                    <label for="website" class="col-sm-2 col-form-label">Website</label>
                    <div class="col-sm-10">
                        <input type="url" class="form-control" id="website" required />
                        <div class="invalid-feedback">*Please enter valid link for your website.</div>
                    </div>
                </div>

                <div class="form-group row">
                    <label for="image" class="col-sm-2 col-form-label">Image link</label>
                    <div class="col-sm-10">
                        <input type="url" class="form-control" id="image" required />
                        <div class="invalid-feedback">*Please enter valid link for your image(link should be from public
                            account for ex.FB,Insta etc)</div>
                    </div>
                </div>

                <fieldset class="form-group row">
                    <legend class="col-form-label col-sm-2 float-sm-left pt-0">
                        Gender
                    </legend>
                    <div class="col-sm-10">
                        <div class="form-check ">
                            <input class="form-check-input" type="radio" name="gender" id="male" value="Male"
                                required />
                            <label class="form-check-label" for="male">
                                Male
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="gender" id="female" value="Female" />
                            <label class="form-check-label" for="female">
                                Female
                            </label>
                            &nbsp;
                            <div class="invalid-feedback">
                                *(Please select at least One.)
                            </div>
                        </div>

                    </div>
                </fieldset>



                <fieldset class="form-group row">
                    <legend class="col-form-label col-sm-2 float-sm-left pt-0">
                        Skills
                    </legend>
                    <div class="col-sm-10">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" name="skill" id="java" value="Java"/>
                            <label class="form-check-label" for="java">
                                Java
                            </label>
                            &nbsp;
                            <div class="invalid-feedback">
                                *(Please make sure that this Box is Checked.)
                            </div>
                        </div>

                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" name="skill" id="html" value="HTML"/>
                            <label class="form-check-label" for="html">
                                HTML
                            </label>
                            &nbsp;
                            <div class="invalid-feedback">
                                *(Please make sure that this Box is Checked.)
                            </div>
                        </div>

                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" name="skill" id="css" value="CSS"/>
                            <label class="form-check-label" for="css">
                                CSS
                            </label>
                            &nbsp;
                            <div class="invalid-feedback">
                                *(Please make sure that this Box is Checked.))
                            </div>
                        </div>
                    </div>
                </fieldset>

                <button type="submit" class="btn btn-primary">Enroll Student</button> &nbsp; &nbsp; &nbsp;
                <button type="reset" class="btn btn-danger">Cancel</button>
            </form>
        </div>

        <hr class="seperation-border" />

        <div id="enrolled-students" class="col-md col-12">
            <div class="enroll-heading">
                <h2>Enrolled Students</h2>
            </div>
            <span id="span">*Fill the form to Enroll the Students.</span>
        </div>
    </div>
</body>

</html>