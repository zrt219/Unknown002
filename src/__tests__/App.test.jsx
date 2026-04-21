import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from '../App'

describe('App shell', () => {
  it('renders the UNKNOWN02 identity, scene modes, and environment controls', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { name: /zrt unknown02 technical viewer/i })
    ).toBeInTheDocument()
    expect(
      screen.getByText(/realistic browser-based 3d engineering viewer/i)
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /clean view/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /engineering view/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /energy view/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /thermal view/i })
    ).toBeInTheDocument()
    expect(screen.getByLabelText(/deep space/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/earth orbit/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/thermal analysis/i)).toBeInTheDocument()
    expect(
      screen.getByLabelText(/auto-select best scene for view mode/i)
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /reactor close/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /reset view/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /fit to selection/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /pan: on/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /free orbit/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /review mode/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /capture mode/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /diagram mode/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /beauty technical mode/i })
    ).toBeInTheDocument()
    expect(screen.getByText(/capture checklist/i)).toBeInTheDocument()
    expect(screen.getByText(/designed by zrt unknown02/i)).toBeInTheDocument()
  })

  it('defaults to clean view and keeps dense technical UI hidden', () => {
    render(<App />)

    expect(
      screen.getByRole('button', { name: /clean view/i })
    ).toHaveAttribute('aria-pressed', 'true')
    expect(screen.queryByText(/subsystem directory/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/visual legend/i)).not.toBeInTheDocument()
    expect(screen.queryByLabelText(/labels/i)).not.toBeInTheDocument()
    expect(screen.getByText(/capture studio/i)).toBeInTheDocument()
  })

  it('shows subsystem directory and subsystem card in engineering view', () => {
    render(<App />)

    fireEvent.click(screen.getByRole('button', { name: /engineering view/i }))

    expect(screen.getByText(/subsystem directory/i)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /selected subsystem/i })
    ).toBeInTheDocument()
    expect(screen.getByLabelText(/labels/i)).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /power management and distribution/i })
    ).toBeInTheDocument()
  })

  it('lets the user switch presentation modes and use capture helpers', () => {
    render(<App />)

    fireEvent.click(screen.getByRole('button', { name: /capture mode/i }))
    fireEvent.click(screen.getByRole('button', { name: /no labels/i }))
    fireEvent.click(screen.getByLabelText(/hide hud for capture/i))

    expect(screen.getByRole('button', { name: /show hud/i })).toBeInTheDocument()
  })

  it('shows energy controls and legend content in energy view', () => {
    render(<App />)

    fireEvent.click(screen.getByRole('button', { name: /energy view/i }))

    expect(screen.getByLabelText(/brayton overlay/i)).toBeInTheDocument()
    expect(
      screen.getByLabelText(/working-fluid particles/i)
    ).toBeInTheDocument()
    expect(screen.getByLabelText(/electric power flow/i)).toBeInTheDocument()
    expect(
      screen.getByText(/closed brayton cycle overview/i)
    ).toBeInTheDocument()
    expect(screen.getByText(/energy legend/i)).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /energy flow composite view/i })
    ).toBeInTheDocument()
  })

  it('shows thermal controls and legend content in thermal view', () => {
    render(<App />)

    fireEvent.click(screen.getByRole('button', { name: /thermal view/i }))

    expect(
      screen.getByLabelText(/thermal materials/i)
    ).toBeInTheDocument()
    expect(
      screen.getByLabelText(/radiator emphasis/i)
    ).toBeInTheDocument()
    expect(
      screen.getByText(/thermal legend/i)
    ).toBeInTheDocument()
    expect(screen.getByText(/thermal notes/i)).toBeInTheDocument()
  })

  it('lets the user toggle label visibility from engineering controls', () => {
    render(<App />)

    fireEvent.click(screen.getByRole('button', { name: /engineering view/i }))

    const labelsToggle = screen.getByLabelText(/labels/i)

    expect(labelsToggle).toBeChecked()

    fireEvent.click(labelsToggle)

    expect(labelsToggle).not.toBeChecked()
  })

  it('lets the user change flow animation speed from energy controls', () => {
    render(<App />)

    fireEvent.click(screen.getByRole('button', { name: /energy view/i }))

    const speedSlider = screen.getByLabelText(/flow animation speed/i)

    expect(speedSlider).toHaveValue('1')

    fireEvent.change(speedSlider, { target: { value: '1.4' } })

    expect(speedSlider).toHaveValue('1.4')
  })

  it('updates the selected subsystem card when the user picks a subsystem from the list', () => {
    render(<App />)

    fireEvent.click(screen.getByRole('button', { name: /engineering view/i }))
    fireEvent.click(
      screen.getByRole('button', { name: /power management and distribution/i })
    )

    expect(
      screen.getByRole('heading', {
        name: /power management and distribution/i
      })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /focus tanks and pmad close/i })
    ).toBeInTheDocument()
    expect(
      screen.getAllByText(/routes generated electric power into conditioned spacecraft loads/i)
        .length
    ).toBeGreaterThan(0)
  })

  it('resets the active camera view back to the current mode default', () => {
    render(<App />)

    fireEvent.click(screen.getByRole('button', { name: /energy view/i }))
    fireEvent.click(
      screen.getByRole('button', { name: /thruster cluster close/i })
    )
    expect(
      screen.getByRole('button', { name: /thruster cluster close/i })
    ).toHaveAttribute('aria-pressed', 'true')

    fireEvent.click(screen.getByRole('button', { name: /reset view/i }))

    expect(
      screen.getByRole('button', { name: /energy flow overview/i })
    ).toHaveAttribute('aria-pressed', 'true')
  })

  it('toggles essential camera controls from the HUD', () => {
    render(<App />)

    const panToggle = screen.getByRole('button', { name: /pan: on/i })
    const orbitModeToggle = screen.getByRole('button', { name: /free orbit/i })

    fireEvent.click(panToggle)
    fireEvent.click(orbitModeToggle)

    expect(
      screen.getByRole('button', { name: /pan: off/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /focus lock/i })
    ).toBeInTheDocument()
  })

  it('fits the camera to the selected subsystem using its focus preset', () => {
    render(<App />)

    fireEvent.click(screen.getByRole('button', { name: /engineering view/i }))
    fireEvent.click(
      screen.getByRole('button', { name: /power management and distribution/i })
    )
    fireEvent.click(screen.getByRole('button', { name: /fit to selection/i }))

    const tanksPmadPreset = screen
      .getAllByRole('button')
      .find((button) => button.textContent?.trim() === 'Tanks and PMAD Close')

    expect(tanksPmadPreset).toHaveAttribute('aria-pressed', 'true')
  })

  it('lets the user turn off auto-follow and preserve a manual environment choice', () => {
    render(<App />)

    const autoFollow = screen.getByLabelText(/auto-select best scene for view mode/i)

    expect(autoFollow).toBeChecked()

    fireEvent.click(autoFollow)
    fireEvent.click(screen.getByLabelText(/deep space/i))
    fireEvent.click(screen.getByRole('button', { name: /clean view/i }))

    expect(screen.getByLabelText(/deep space/i)).toBeChecked()
  })
})
