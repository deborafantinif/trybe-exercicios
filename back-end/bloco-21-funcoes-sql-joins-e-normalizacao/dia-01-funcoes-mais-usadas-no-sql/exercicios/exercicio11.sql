SELECT 
    department_id, AVG(salary), SUM(employee_id)
FROM
    hr.employees
GROUP BY department_id
HAVING SUM(employee_id) > 10;