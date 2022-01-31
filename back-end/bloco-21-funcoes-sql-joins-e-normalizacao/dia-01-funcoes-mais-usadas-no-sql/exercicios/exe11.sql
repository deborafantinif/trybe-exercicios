SELECT 
    REPLACE(phone_number, 515, 777)
FROM
    hr.employees
WHERE
    phone_number LIKE '515%';