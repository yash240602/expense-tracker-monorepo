# --- Stage 1: Build the package ---
FROM python:3.11.4 as builder

WORKDIR /wheelhouse

# Copy the files needed to build the package
COPY setup.py .
COPY src/ ./src/

# Build the source distribution package (.tar.gz)
RUN python setup.py sdist


# --- Stage 2: Create the final image ---
FROM python:3.11.4

WORKDIR /app

# Copy the built package from the "builder" stage
COPY --from=builder /wheelhouse/dist/ds-service-1.0.tar.gz .

# Install the package and its dependencies
RUN pip install ds-service-1.0.tar.gz

# Expose the port the app runs on
EXPOSE 80

# Command to run the application
CMD ["python", "-m", "app"]
