import * as React from "react"
import '@testing-library/jest-dom/extend-expect'
import { render } from "@testing-library/react"

import Header from "../header"

describe("Header", () => {
  it("renders without crashing", () => {
    const { getByText } = render(<Header siteTitle="Gatsby Starter Ionic" />);
    expect(getByText("Gatsby Starter Ionic")).toBeInTheDocument();
  })
})