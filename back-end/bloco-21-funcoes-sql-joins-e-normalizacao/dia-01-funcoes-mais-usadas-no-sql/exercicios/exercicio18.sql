SELECT 
    first_name, last_name, DATEDIFF(NOW(), hire_date)
FROM
    hr.employees;